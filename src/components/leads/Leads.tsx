import './Leads.scss';
import { FC, JSX, useEffect } from 'react';
import ButtonMain from '../../ui/button-main/ButtonMain.tsx';
import Table from '../../ui/table/Table.tsx';
import LeadModel from '../../models/lead-model.ts';
import { useGetLeadsQuery } from '../../features/api/leads-api.ts';

const Main: FC = (): JSX.Element => {
    const { data }: { data: LeadModel } = useGetLeadsQuery();

    return (
        <div className="leads">
            <div className="head">
                <h2>Всі ліди</h2>
                <ButtonMain>Створити ліда</ButtonMain>
            </div>
            <p>Результатів знайдено: {data?.length || 0}</p>
            {data?.length > 0 ? <Table data={data} /> : null}
        </div>
    )
};

export default Main;
