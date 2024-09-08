import './MainPage.scss';
import { FC, JSX } from 'react';

const MainPage: FC = (): JSX.Element => {
    return (
        <div className="main-page">
            <h2>Головна сторінка</h2>
            <p>Тестове завдання на вакансію Frontend-розробник у компанію Robocode</p>
        </div>
    );
};

export default MainPage;
