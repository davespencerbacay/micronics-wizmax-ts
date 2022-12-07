import React from "react";
import { Table } from "reactstrap";
import "./ProductSpecifications.scss";

interface IProductSpecifications {
  specifications: any;
}

const ProductSpecifications: React.FC<IProductSpecifications> = (props) => {
  return (
    <div className="specifications-container">
      <Table className="specifications-table">
        <tbody>
          {props.specifications.map((specs: any) => {
            return (
              <tr>
                <th>{specs.name}</th>
                <td>{specs.description}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductSpecifications;
