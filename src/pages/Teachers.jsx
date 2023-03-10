import React from 'react'

import { GridComponent, ColumnsDirective, Page, ColumnDirective, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { teachersData, contextMenuItems, employeesGrid } from '../data/dummy';

import { Header } from '../components';
import { Column } from '@syncfusion/ej2-react-charts';

const Employees = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Teachers" />
            <GridComponent
                id="gridcomp"
                dataSource={teachersData}
                allowPaging
                allowSorting
                toolbar={['Search']}
                width='auto'
            >
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Search, Toolbar]} />
            </GridComponent>
        </div>
    )
}

export default Employees
