"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import inventoriesData from "../sample/dummy_inventories.json";
import productsData from "../sample/dummy_products.json";
type ProductData = {
  id: number;
  name: string;
  price: number;
  description: string;
};

type FormData = {
  id: number;
  quantity: number;
};

type InventoryData = {
  id: number;
  type: string;
  date: string;
  unit: number;
  quantity: number;
  price: number;
  inventory: number;
};

export default function Page({ params }: { params: { id: number } }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 読み込みデータの保持
  const [product, setProduct] = useState<ProductData>({
    id: 0,
    name: "",
    price: 0,
    description: "",
  });
  const [data, setData] = useState<Array<InventoryData>>([]);

  // submit時のactionを分岐させる
  const [action, setAction] = useState<string>("");

  useEffect(() => {
    const selectedProduct: ProductData = productsData.find(
      (v) => v.id == params.id
    ) ?? { id: 0, name: "", price: 0, description: "" };
    setProduct(selectedProduct);
    setData(inventoriesData);
  }, []);

  const onSubmit = (event: any): void => {
    const data: FormData = {
      id: Number(event.id),
      quantity: Number(event.quantity),
    };

    // actionによってHTTPメソッドと使用するパラメーターを切り替える
    if (action === "purchase") {
      handlePurchase(data);
    } else if (action === "sell") {
      if (data.id === null) {
        return;
      }
      handleSell(data);
    }
  };

  // 仕入れ・卸し処理
  const handlePurchase = (data: FormData) => {
    // TODO: 仕入れ処理
  };
  const handleSell = (data: FormData) => {
    // TODO: 卸し処理
  };

  return (
    <div>
      <h2>商品在庫管理</h2>
      <h3>在庫管理</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>商品名</label>
          <span>{product.name}</span>
        </div>
        <div>
          <label>数値:</label>
          <input
            type="number"
            id="quantity"
            {...register("quantity", {
              required: "必須入力です。",
              min: {
                value: 1,
                message: "1から99999999の数値を入力してください",
              },
              max: {
                value: 99999999,
                message: "1から99999999の数値を入力してください",
              },
            })}
          />
          {errors.quantity && <div>{errors.quantity?.message?.toString()}</div>}
        </div>
        <button type="submit" onClick={() => setAction("purchase")}>
          商品を仕入れる
        </button>
        <button type="submit" onClick={() => setAction("sell")}>
          商品を卸す
        </button>
      </form>
      <h3>在庫履歴</h3>
      <table>
        <thead>
          <tr>
            <th>処理種別</th>
            <th>処理日時</th>
            <th>単価</th>
            <th>数量</th>
            <th>価格</th>
            <th>在庫数</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data: InventoryData) => (
            <tr key={data.id}>
              <td>{data.type}</td>
              <td>{data.date}</td>
              <td>{data.unit}</td>
              <td>{data.quantity}</td>
              <td>{data.price}</td>
              <td>{data.inventory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
