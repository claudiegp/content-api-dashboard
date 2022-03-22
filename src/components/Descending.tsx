import React from "react";
import { contentData } from "../data/data";

const Descending = () => {
  const highestToLowest = (a: any, b: any) =>
    (b.totalViews.total as number) - (a.totalViews.total as number);
  return (
    <table>
      <caption>Comcast Content</caption>
      <tbody>
        {contentData.sort(highestToLowest).map((data, index) => {
          return (
            <tr key={index}>
              <td>
                <img height={100} alt="hero" src={data.assetImage}></img>

                <h1>{data.name}</h1>
                <h2>{data.provider}</h2>
                <h3>{data.totalViews && data.totalViews.total + " views"}</h3>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Descending;
