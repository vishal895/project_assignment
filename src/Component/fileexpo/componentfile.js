import React, { useState } from "react";

const Componentfile = ({ fileExplorerData , onAdd, onDelete}) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      {fileExplorerData.type === "folder" ? (
        <div>
          <span onClick={() => setExpand(!expand)}>
            📁 {fileExplorerData.name}
          </span>
          <span style={{ marginLeft: 10 }}>
            <button onClick={() => onAdd(fileExplorerData.id)}>➕ Add</button>
            {fileExplorerData.name !== "root" && (
              <button onClick={() => onDelete(fileExplorerData.id)}>
                ❌ Delete
              </button>
            )}
          </span>
          {expand ? (
            <div style={{ marginLeft: 20 }}>
              {fileExplorerData.children &&
                fileExplorerData.children.map((item, index) => (
                  <Componentfile
                    key={item.id}
                    fileExplorerData={item}
                    onAdd={onAdd}
                    onDelete={onDelete}
                  />
                ))}
            </div>
          ) : null}
        </div>
      ) : (
        <div>
          <span>📄 {fileExplorerData.name}</span>
        </div>
      )}
    </>
  );
};

export default Componentfile;
