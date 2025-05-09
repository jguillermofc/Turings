import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useGroupDetails } from '../../hooks/UseGroupDetails';
import GroupShop from './GroupShop';

const GroupShopPage = () => {
    const { groupId } = useParams();
    const [searchParams] = useSearchParams();
    const isTeacher = searchParams.get('role') === 'teacher';
    const { loading, error } = useGroupDetails(groupId);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-black">
                <div className="text-xl text-gray-500 dark:text-gray-400">Cargando productos...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return <GroupShop groupId={groupId} isTeacher={isTeacher} />;
};

export default GroupShopPage;