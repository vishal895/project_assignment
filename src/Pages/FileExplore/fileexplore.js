import React, { useState } from 'react'
import Componentfile from '../../Component/fileexpo/componentfile'
import fileExplorerData from '../../json'

const Fileexplore = () => {
    const [data,setData] = useState(fileExplorerData)
    const handleAdd = (id) => {
    const add = (node) => {
      if (node.id === id) {
        node.children = node.children || [];
        node.children.push({
          id: Date.now(),
          name: `New Folder ${node.children.length + 1}`,
          type: "folder",
          children: [],
        });
      } else {
        node.children?.forEach(add);
      }
    };

    const newData = { ...data };
    add(newData);
    setData(newData);
  };


   const handleDelete = (id) => {
    const del = (node) => {
      if (!node.children) return;
      node.children = node.children.filter((child) => child.id !== id);
      node.children.forEach(del);
    };

    if (data.id === id) return; 
    const newData = { ...data };
    del(newData);
    setData(newData);
  };

  return (
    <div>
      <Componentfile fileExplorerData={fileExplorerData}  onAdd={handleAdd}
        onDelete={handleDelete}/>
    </div>
  )
}

export default Fileexplore
