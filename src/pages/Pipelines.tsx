// PipelineDashboard.tsx
import React from 'react';
import PipelineCard from '../components/PipelineCard'; // Adjust the path if needed
import data from '../mockupData/dashboard.json';

const PipelineDashboard: React.FC = () => {
    return (
        <div className="flex flex-wrap gap-4 p-4">
            {data.dashboard.pipelines.map(pipeline => (
                <PipelineCard
                    key={pipeline.id}
                    id={pipeline.id}
                    name={pipeline.name}
                    status={pipeline.status}
                    startedAt={pipeline.startedAt}
                    lastUpdated={pipeline.lastUpdated}
                    completedAt={pipeline.completedAt}
                    failedAt={pipeline.failedAt}
                    triggeredBy={pipeline.triggeredBy}
                    branch={pipeline.branch}
                />
            ))}
        </div>
    );
};

export default PipelineDashboard;
