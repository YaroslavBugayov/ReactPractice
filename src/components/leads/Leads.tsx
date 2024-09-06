import './Leads.scss';
import { FC, JSX, useEffect, useState, MouseEvent } from 'react';
import ButtonMain from '../../ui/button-main/ButtonMain.tsx';
import Table from '../../ui/table/Table.tsx';
import LeadModel from '../../models/lead-model.ts';
import { useGetLeadsQuery } from '../../features/api/leads-api.ts';
import Modal from '../modal/Modal.tsx';

const Leads: FC = (): JSX.Element => {
    const { data }: { data: LeadModel } = useGetLeadsQuery();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = (e: MouseEvent<HTMLElement>) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(false);
        }
    };

    return (
        <>
            {isModalOpen && <Modal onClose={handleCloseModal} />}
            <div className="leads">
                <div className="head">
                    <h2>Всі ліди</h2>
                    <ButtonMain onClick={handleOpenModal}>Створити ліда</ButtonMain>
                </div>
                <p>Результатів знайдено: {data?.length || 0}</p>
                {data?.length > 0 ? <Table data={data}/> : null}
            </div>
        </>
    );
};

export default Leads;
