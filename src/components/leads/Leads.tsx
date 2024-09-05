import './Leads.scss';
import { FC, JSX } from 'react';
import ButtonMain from '../../ui/button-main/ButtonMain.tsx';
import Table from '../../ui/table/Table.tsx';
import LeadModel from '../../models/lead-model.ts';

const data: LeadModel[] = [

]

const Main: FC = (): JSX.Element => {

    return (
        <div className="leads">
            <div className="head">
                <h2>Всі ліди</h2>
                <ButtonMain>Створити ліда</ButtonMain>
            </div>
            <p>Результатів знайдено: {data.length}</p>
            <Table data={data} />
        </div>
    )
};

export default Main;
