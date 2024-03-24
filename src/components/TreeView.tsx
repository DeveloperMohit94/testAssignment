import React, {useState} from 'react';
import {Text, View} from 'react-native';
import TreeNode from './TreeNode';
import {Product} from '../types/Product';
import {styles} from '../styles/styles';

interface TreeViewProps {
  data: Product[];
}

interface SelectedItem {
  name: string;
  parentName: string;
}

const TreeView: React.FC<TreeViewProps> = ({data}) => {
  const [treeData, setTreeData] = useState<Product[]>(data);
  const [selectedItems, setSelectedItems] = useState<String[]>([]);

  const handleCheckboxChange = (node: Product) => {
    const updatedTreeData = updateTreeData(treeData, node);
    setTreeData(updatedTreeData);
    getSelectedItemsByParentName(updatedTreeData);
  };

  const updateTreeData = (
    treeData: Product[],
    selectedNode: Product,
  ): Product[] => {
    return treeData.map(node => {
      if (node.id === selectedNode.id) {
        node.isSelected = !node.isSelected;
        updateChildrenState(node, node.isSelected);
      } else if (node.children) {
        node.children = updateTreeData(node.children, selectedNode);
        node.isSelected = node.children.every(child => child.isSelected);
      }
      return node;
    });
  };

  const updateChildrenState = (parentNode: Product, isSelected: boolean) => {
    if (parentNode.children) {
      parentNode.children.forEach(child => {
        child.isSelected = isSelected;
        updateChildrenState(child, isSelected);
      });
    }
  };

  function getSelectedItemsByParentName(data: Product[]) {
    const selectedItemsData: SelectedItem[] = [];

    function traverse(node: Product, parentName: string | null) {
      if (node.isSelected) {
        selectedItemsData.push({name: node.name, parentName: parentName || ''});
      }
      if (node.children) {
        node.children.forEach(child => traverse(child, node.name));
      }
    }

    data.forEach(node => traverse(node, null));

    const selectedItemsMap: {[key: string]: string[]} = {};
    // Group selected items by parent name
    selectedItemsData.forEach(item => {
      const {name, parentName} = item;
      if (!selectedItemsMap[parentName]) {
        selectedItemsMap[parentName] = [name];
      } else {
        selectedItemsMap[parentName].push(name);
      }
    });

    // Build the string for each parent name
    const selectedItemsStrings = Object.entries(selectedItemsMap).map(
      ([parentName, items]) => {
        return `${parentName} ${items.join(', ')}`;
      },
    );
    setSelectedItems(selectedItemsStrings);
  }

  return (
    <View style={styles.container}>
      {treeData.map((node, index) => (
        <TreeNode
          key={index}
          node={node}
          handleCheckboxChange={handleCheckboxChange}
        />
      ))}
      {selectedItems?.length ? (
        <View style={styles.selectedItemsContainer}>
          <Text style={styles.selectedItemsText}>Selected Items:</Text>
          {selectedItems.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
        </View>
      ) : null}
    </View>
  );
};

export default TreeView;
