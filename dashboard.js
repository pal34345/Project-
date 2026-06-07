import { DetailsList } from '@fluentui/react';

const tasks = [
  { key: 1, name: 'Daily Task Auto-Submitted', status: '✓' },
  { key: 2, name: 'Project Feasibility Score', status: '82%' }
];

export default function Dashboard() {
  return (
    <div style={{ padding: 50 }}>
      <h2>Team Dashboard</h2>
      <DetailsList items={tasks} />
    </div>
  );
}