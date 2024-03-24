import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Product} from '../types/Product';
import {styles} from '../styles/styles';

interface TreeNodeProps {
  node: Product;
  handleCheckboxChange: (node: Product) => void;
}

const TreeNode: React.FC<TreeNodeProps> = ({node, handleCheckboxChange}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCheckChange = () => {
    handleCheckboxChange(node);
  };

  return (
    <View>
      <>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={handleCheckChange}
            style={styles.checkboxContainer}>
            {node.isSelected && <View style={styles.checkboxSelected} />}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleExpansion}
            style={{flexDirection: 'row'}}
            disabled={!node.children}>
            <Text style={styles.nodeText}>{node.name}</Text>
          </TouchableOpacity>
        </View>
        {!isExpanded && node.devices_count && (
          <Text style={styles.descriptionText}>{node.devices_count}</Text>
        )}
      </>
      {isExpanded && node.children && node.children.length > 0 && (
        <View style={styles.childrenContainer}>
          {node.children.map((childNode, index) => (
            <TreeNode
              key={index}
              node={childNode}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default TreeNode;
