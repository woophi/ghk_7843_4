import { useEffect, useState } from 'react';

import { StockItem } from '../types';

export const useStocksData = () => {
  const [stocks, setStocks] = useState<StockItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://gist.githubusercontent.com/nsdooris/9e5e6bea63a9f469526340ff0a7d4dd1/raw/');
      const data = (await response.json()) as { items: StockItem[] };
      setStocks(data.items);

      setLoading(false);
    };

    fetchData();
  }, []);

  return { stocks, loading };
};
