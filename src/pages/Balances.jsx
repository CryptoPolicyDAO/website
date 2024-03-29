import { useState, useEffect } from "react";
import { Table, ConfigProvider } from "antd";
import defaultLogo from "../assets/logo1.png";
import { getDataFromCovalentAPI } from "../utils/api";

const TokenBalances = ({
  chainId, // Receive chainId as a prop
  nft = true,
  noNFTFetch = true,
  quoteCurrency = "USD",
}) => {
  const [data, setData] = useState([]); // Use setData instead of getData
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [publicKey] = useState("0xD156382c8B7CF309865c7ACAc5Caea323f8C30A4");

  useEffect(() => {
    if (publicKey) {
      fetchData();
    }
  }, [publicKey, chainId, nft, noNFTFetch, quoteCurrency]);

  const handleImgError = (e) => {
    e.target.src = defaultLogo;
  };

  const fetchData = () => {
    setError(false);
    setIsLoading(true);
    const URL = `https://api.covalenthq.com/v1/${chainId}/address/${publicKey}/balances_v2/?quote-currency=${quoteCurrency}&format=JSON&nft=${nft}&no-nft-fetch=${noNFTFetch}`;
    getDataFromCovalentAPI(URL)
      .then((response) => {
        setIsLoading(false);
        // Filter out spam tokens and update specific token images
        const updatedData = response.data.items.filter((item) => {
          if (
            [
              "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", // Fantom
              "0xe0654c8e6fd4d733349ac7e09f6f23da256bf475", // Scream
              "0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e", // Dai Stablecoin
              "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83", // Wrapped Fantom
            ].includes(item.contract_address)
          ) {
            if (
              item.contract_address ===
              "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
            ) {
              item.logo_url = "/fantom.png"; // Update the logo URL for Fantom token
            } else if (
              item.contract_address ===
              "0xe0654c8e6fd4d733349ac7e09f6f23da256bf475"
            ) {
              item.logo_url = "/scream.jpg"; // Update the logo URL for Scream token
            } else if (
              item.contract_address ===
              "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83"
            ) {
              item.logo_url = "/wftm.png"; // Update the logo URL for Wrapped Fantom token
            }
            return item;
          }
          return null; // Exclude spam tokens
        });

        setData(updatedData.filter(Boolean)); // Update state with filtered and updated tokens
      })
      .catch((e) => setError(true));
  };

  const columns = [
    {
      title: "",
      dataIndex: "logo_url",
      key: "logo_url",
      render: (text) => (
        <img
          src={text}
          onError={handleImgError}
          style={{ width: "40px", height: "40px" }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "contract_name",
      key: "contract_name",
    },
    {
      title: "Symbol",
      dataIndex: "contract_ticker_symbol",
      key: "contract_ticker_symbol",
    },
    {
      title: "Amount",
      dataIndex: "balance",
      key: "balance",
      sorter: (a, b) => a.balance - b.balance,
      render: (_, item) =>
        Number.isInteger(item.balance / 10 ** item.contract_decimals)
          ? item.balance / 10 ** item.contract_decimals
          : (item.balance / 10 ** item.contract_decimals).toFixed(4),
    },
    {
      title: "Value",
      dataIndex: "pretty_quote",
      key: "pretty_quote",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      filters: [
        {
          text: "cryptocurrency",
          value: "cryptocurrency",
        },
        {
          text: "stablecoin",
          value: "stablecoin",
        },
        {
          text: "nft",
          value: "nft",
        },
        {
          text: "dust",
          value: "dust",
        },
      ],
      onFilter: (value, item) => item.type.startsWith(value),
    },
    {
      title: "Contract Address",
      dataIndex: "contract_address",
      key: "contract_address",
    },
  ];

  if (error) {
    return <p> Unable to fetch data</p>;
  } else if (isLoading) {
    return <Table loading={true} />;
  } else if (!isLoading && data) {
    return (
      <ConfigProvider
        theme={{
          components: {
            Table: {
              colorBgContainer: "rgba(185, 189, 192, 0.25)",
              headerBg: "var(--header-color)",
              rowHoverBg: "var(--effect-1)",
              lineHeight: "1",
              headerColor: "#f0f8ff",
              colorText: "var(--description-color)",
            },
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={data}
          rowKey="contract_address"
          style={{ width: "75%" }}
        />
      </ConfigProvider>
    );
  }
};

export default TokenBalances;
