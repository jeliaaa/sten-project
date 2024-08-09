// PipelineCard.tsx
import React from 'react';

interface PipelineCardProps {
    id: string;
    name: string;
    status: string;
    startedAt: string;
    lastUpdated?: string;
    completedAt?: string;
    failedAt?: string;
    triggeredBy: string;
    branch: string;
}

const PipelineCard: React.FC<PipelineCardProps> = ({
    name,
    status,
    startedAt,
    lastUpdated,
    completedAt,
    failedAt,
    triggeredBy,
    branch
}) => {
    const statusColor: Record<string, string> = {
        Running: 'rgb(33, 150, 243)', // Blue
        Completed: 'rgb(76, 175, 80)', // Green
        Failed: 'rgb(244, 67, 54)' // Red
    };

    return (
        <div className="bg-white border rounded-lg shadow-lg p-4 text-left flex flex-col w-80">
            <div className="text-xl font-bold mb-2" style={{ color: statusColor[status] }}>
                {name}
            </div>
            <div className="text-sm text-gray-600 mb-2">
                <div><strong>Status:</strong> {status}</div>
                <div><strong>Started At:</strong> {new Date(startedAt).toLocaleString()}</div>
                {completedAt && <div><strong>Completed At:</strong> {new Date(completedAt).toLocaleString()}</div>}
                {failedAt && <div><strong>Failed At:</strong> {new Date(failedAt).toLocaleString()}</div>}
                <div><strong>Last Updated:</strong> {lastUpdated ? new Date(lastUpdated).toLocaleString() : 'N/A'}</div>
                <div><strong>Triggered By:</strong> {triggeredBy}</div>
                <div><strong>Branch:</strong> {branch}</div>
            </div>
        </div>
    );
};

export default PipelineCard;
