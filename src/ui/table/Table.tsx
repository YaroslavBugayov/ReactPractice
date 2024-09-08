import './Table.scss';
import { FC, JSX, useEffect } from 'react';
import LeadModel from '../../models/lead-model.ts';
import { useDeleteLeadMutation } from '../../features/api/leads-api.ts';

interface TableProps {
    data: LeadModel[]
}

const dateOptions = {day: 'numeric', month: 'long', year: 'numeric'};

const formatDate = (date: string) => {
    return new Date(date)
        .toLocaleDateString('uk-UA', dateOptions)
        .replace('р.', 'року');
};

const checkGender = (sex: 'male' | 'female') => {
    switch (sex) {
        case 'male':
            return 'Чоловіча';
        case 'female':
            return 'Жіноча';
    }
};

const Table: FC = ({data}: TableProps): JSX.Element => {
    const [deleteLead] = useDeleteLeadMutation();

    const handleDelete = (id: number) => {
        deleteLead(id);
    };

    return (
        <div className="table">
            <div className="table-head">
                <div className="table-head_item">ПІБ</div>
                <div className="table-head_item">ID</div>
                <div className="table-head_item">Вік</div>
                <div className="table-head_item">Стать</div>
                <div className="table-head_item">Номер телефону</div>
                <div className="table-head_item">Дата створення</div>
                <div className="table-head_item"></div>
            </div>
            <div className="table-body">
                {data?.map((lead: LeadModel, index: number) => (
                    <div key={index} className="table-body_row">
                        <div className="table-body_item">{lead.lastName} {lead.name}</div>
                        <div className="table-body_item">{lead.id}</div>
                        <div className="table-body_item">{lead.age}</div>
                        <div className="table-body_item">{checkGender(lead.sex)}</div>
                        <div className="table-body_item">{lead.phone}</div>
                        <div className="table-body_item">{formatDate(lead?.createdAt)}</div>
                        <div className="table-body_item button-delete"><a
                            onClick={() => handleDelete(lead.id)}>Видалити</a></div>
                    </div>
                ))}
            </div>
        </div>

        // <table>
        //     <thead>
        //     <tr>
        //         <th>ПІБ</th>
        //         <th>ID</th>
        //         <th>Вік</th>
        //         <th>Стать</th>
        //         <th>Номер телефону</th>
        //         <th>Дата створення</th>
        //         <th></th>
        //     </tr>
        //     </thead>
        //     <tbody>
        //     {data?.map((lead: LeadModel, index: number) => (
        //         <tr key={index}>
        //             <td>{lead.lastName} {lead.name}</td>
        //             <td>{lead.id}</td>
        //             <td>{lead.age}</td>
        //             <td>{lead.sex}</td>
        //             <td>{lead.phone}</td>
        //             <td>{lead.createdAt}</td>
        //             <td>Видалити</td>
        //         </tr>
        //     ))}
        //     </tbody>
        // </table>
    );
};

export default Table;
