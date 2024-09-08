import './Leads.scss';
import { FC, JSX, useState, MouseEvent, KeyboardEvent } from 'react';
import ButtonMain from '../../ui/button-main/ButtonMain.tsx';
import Table from '../../ui/table/Table.tsx';
import LeadModel from '../../models/lead-model.ts';
import { useGetLeadsQuery } from '../../features/api/leads-api.ts';
import Modal from '../../ui/modal/Modal.tsx';
import LeadForm from "../../ui/lead-form/LeadForm.tsx";

const Leads: FC = (): JSX.Element => {
    const { data }: { data: LeadModel[] } = useGetLeadsQuery();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = (e?: MouseEvent<HTMLElement> | KeyboardEvent) => {
        if (e?.target === e?.currentTarget) {
            setIsModalOpen(false);
        }
    };

    return (
        <>
            {isModalOpen && <Modal title="Створення ліда" onClose={handleCloseModal}>
                <LeadForm onClose={handleCloseModal} />
            </Modal>}
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
