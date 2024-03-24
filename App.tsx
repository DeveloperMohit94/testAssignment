import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './src/styles/styles';
import TreeView from './src/components/TreeView';

export interface Product {
  id: number;
  name: string;
  devices_count?: string;
  isSelected: boolean;
  children?: Product[];
}

const productsData: Product[] = [
  {
    id: 1,
    name: 'Phones',
    devices_count: '200 + iPhone 6 and 2.5k other',
    isSelected: false,
    children: [
      {
        id: 2,
        name: 'Apple',
        devices_count: '200 + iPhone 6 and 2.5k other',
        isSelected: false,
        children: [
          {
            id: 3,
            name: 'iPhone 6',
            isSelected: false,

            children: [
              {
                id: 4,
                name: '128GB',
                isSelected: false,
              },
              {
                id: 5,
                name: '256GB',
                isSelected: false,
              },
              {
                id: 6,
                name: '512GB',
                isSelected: false,
              },
            ],
          },
          {
            id: 7,
            isSelected: false,
            name: 'iPhone 12',
            children: [
              {
                id: 8,
                name: '128GB',
                isSelected: false,
              },
              {
                id: 9,
                name: '264GB',
                isSelected: false,
              },
              {
                id: 10,
                name: '512GB',
                isSelected: false,
              },
            ],
          },
        ],
      },
      {
        id: 11,
        name: 'Samsung',
        devices_count: '500 + Galaxy and 2.5k other',
        isSelected: false,
        children: [
          {
            id: 12,
            name: 'Galaxy S7',
            isSelected: false,
            children: [
              {
                id: 13,
                name: '128GB',
                isSelected: false,
              },
            ],
          },
          {
            id: 14,
            name: 'Samsung M1',
            isSelected: false,
          },
        ],
      },
    ],
  },
  {
    id: 15,
    name: 'Computers',
    devices_count: '200 + mac books, and PCs',
    isSelected: false,
    children: [
      {
        id: 16,
        name: 'MacBook',
        isSelected: false,
      },
      {
        id: 17,
        name: 'Dell XPS',
        isSelected: false,
      },
    ],
  },
  {
    id: 18,
    name: 'Watches',
    devices_count: '150+ apple watches, and 200+ samsung watches',
    isSelected: false,
    children: [
      {
        id: 19,
        name: 'Apple',
        isSelected: false,
      },
      {
        id: 20,
        name: 'Samsung',
        isSelected: false,
      },
    ],
  },
  {
    id: 21,
    name: 'TVs',
    devices_count: '20+ samsung TVs, and 50+ Apple TVs',
    isSelected: false,
    children: [
      {
        id: 22,
        name: 'Samsung',
        isSelected: false,
      },
      {
        id: 23,
        name: 'Apple',
        isSelected: false,
      },
    ],
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TreeView data={productsData} />
    </SafeAreaView>
  );
}
