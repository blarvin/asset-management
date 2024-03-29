import React, { useState } from "react";
import styled from "styled-components";

function AssetTreeNode({ data }) {
  const [isCurrent, setIsCurrent] = useState(false);

  const toggleCurrentState = (event) => {
    event.stopPropagation(); // Prevent event from bubbling up to parent nodes
    setIsCurrent(!isCurrent);
  };

  const nodeName = Object.keys(data)[0];

  // Check if data only has one key, otherwise throw error
  if (Object.keys(data).length > 1) {
    throw new Error("Data object does not have the correct structure.");
  }

  const assetDetails = data[nodeName];

  // Check if the asset has children (other keys besides 'id' and 'specs')
  const childrenKeys = Object.keys(assetDetails).filter(
    (key) => key !== "id" && key !== "specs"
  );
  const hasChildren = childrenKeys.length > 0;

  return (
    <div
      className={`asset-tree-node ${isCurrent ? "current" : "card"}`}
      onClick={toggleCurrentState}
    >
      {isCurrent ? (
        // State B: 'current' maximized view
        <NodeCurrent>
          <div className="image-carousel">
            {/* Image carousel for the current asset */}
          </div>
          <div className="details">
            {/* More detailed information about the asset */}
            <p>{nodeName}</p>
            {/* Render additional details from specs */}
            {assetDetails.specs &&
              Object.entries(assetDetails.specs).map(([key, value]) => (
                <p key={key}>{`${key}: ${value}`}</p>
              ))}
          </div>
          {hasChildren && (
            <div className="children">
              {childrenKeys.map((childKey) => (
                <AssetTreeNode data={{ [childKey]: assetDetails[childKey] }} />
              ))}
            </div>
          )}
        </NodeCurrent>
      ) : (
        // State A: 'card' view
        <NodeCard className="card-view">
          <p>{nodeName}</p>
          {/* Summary information about the asset */}
        </NodeCard>
      )}
    </div>
  );
}

const NodeCurrent = styled.div`
  border: 1px solid yellow;
  background-color: grey;
`;
const NodeCard = styled.div`
  border: 1px solid red;
  padding: 8px;
  margin: 8px;
  background-color: lightgrey;
`;

export default AssetTreeNode;

// .asset-tree-node.card {
// /* Styling for card view */
// }

// .asset-tree-node.current {
// /* Styling for current maximized view */
// }

// function AssetTreeNode(props) {
//     const name = Object.keys(props.asset)[0];

//     return (
//         <NodeContainer>
//           <h1>{name}</h1>
//           <h4>{props.asset[name].specs.description}</h4>
//         </NodeContainer>
//     )
// }

// const NodeContainer = styled.div`
//     border: 1px solid green;
//     width: 100%;
//     padding: 8px;
//     margin-top: 8px;

// `

// export default AssetTreeNode;
