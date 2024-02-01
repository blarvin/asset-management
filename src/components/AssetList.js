import React, { useState, useEffect } from 'react';
import AssetTreeNode from './AssetTreeNode';

function AssetList() {
    const [assets, setAssets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchAssets() {
            try {
                const response = await fetch('/.netlify/functions/fetch-assets');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setAssets(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        }

        fetchAssets();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <React.Fragment>
            {assets.map((asset, index) => {
                // Assuming each asset is an object with a single key-value pair,
                // where the key is the asset name and the value is the asset details.
                const assetKey = Object.keys(asset)[0];
                return (
                    <AssetTreeNode key={asset[assetKey].id} data={asset} />
                );
            })}
        </React.Fragment>
    );
}

export default AssetList;
