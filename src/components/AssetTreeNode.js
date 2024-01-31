import styled from "styled-components";

function AssetTreeNode(props) {
    return (
        <NodeContainer>
            <h1>{props.asset.name}</h1>
            <h1>ID:{props.asset.id}</h1>
            <p>{props.asset.description}</p>
            <p>Asset Type: {props.asset.type}</p>
        </NodeContainer>
    )
}

const NodeContainer = styled.div`
    border: 1px solid green;
    width: 100%;
    padding: 8px;
    margin-top: 8px;

`

export default AssetTreeNode;

