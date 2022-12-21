import React from 'react'

import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { goalsData, goalGrid } from '../data/dummy';
import { Header } from '../components';

const Goals = () => {
    return (
        <div className='m-2 md:10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category='App' title='Goals' />
            <KanbanComponent
                id='kanban'
                dataSource={goalsData}
                cardSettings = {{contentField: 'Summary', headerField: 'Id'}}
                keyField="Status"
            >
                <ColumnsDirective>
                    {goalGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                </ColumnsDirective>
            </KanbanComponent>
        </div>
    )
}

export default Goals