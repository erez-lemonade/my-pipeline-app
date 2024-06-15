import React from 'react';
import ReactFlow, { ReactFlowProvider, Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const nodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Docker Build' },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    data: { label: 'Run Tests' },
    position: { x: 200, y: 0 },
  },
  {
    id: '3',
    data: { label: 'Deploy to Staging' },
    position: { x: 400, y: 0 },
  },
  {
    id: '4',
    data: { label: 'Deploy to Production' },
    position: { x: 600, y: 0 },
  },
  {
    id: '5',
    data: { label: 'Run Integration Tests' },
    position: { x: 800, y: 0 },
  },
  {
    id: '6',
    type: 'output',
    data: { label: 'Provision Infrastructure' },
    position: { x: 1000, y: 0 },
  },
];

const edges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
  { id: 'e5-6', source: '5', target: '6', animated: true },
];

const Pipeline = () => {
  return (
    <div style={{ width: '100%', height: '150px' }}>
      <ReactFlowProvider>
        <ReactFlow nodes={nodes} edges={edges}>
          <Controls />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default Pipeline;

