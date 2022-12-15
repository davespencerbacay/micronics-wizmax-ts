import React from "react";
import { Table } from "reactstrap";
import "./ProductSpecifications.scss";

interface IProductSpecifications {
  specifications: any;
}

const ProductSpecifications: React.FC<IProductSpecifications> = (props) => {
  return (
    <div className="specifications-container">
      <Table className="specifications-table" responsive>
        <tbody>
          {props.specifications.map((specs: any) => {
            if (specs.subname && specs.subdescription !== null) {
              return (
                <tr>
                  <th className="specs-name">{specs.name}</th>
                  <td>
                    {specs.subname && (
                      <div className="subname-container">
                        {specs.subname.map((name: any) => {
                          return <th className="specs-subname">{name}</th>;
                        })}
                      </div>
                    )}
                  </td>
                  <td>
                    {specs.subdescription && (
                      <div className="subdescription-container">
                        {specs.subdescription.map((description: any) => {
                          return (
                            <td className="specs-subdescription">
                              {description}
                            </td>
                          );
                        })}
                      </div>
                    )}
                  </td>

                  <td className="specs-description">{specs.description}</td>
                </tr>
              );
            } else {
              return (
                <tr>
                  <th className="specs-name">{specs.name}</th>
                  <td></td>
                  <td></td>
                  <td className="specs-description">{specs.description}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductSpecifications;
