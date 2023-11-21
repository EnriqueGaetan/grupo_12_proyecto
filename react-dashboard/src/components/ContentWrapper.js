import React from 'react';
import Totals from './Totals';
import LastView from './LastView';
import Chart from './Chart';
import CategoryInDb from './CategoryInDb';

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    
                    <Totals />
                    <CategoryInDb/>
                    <LastView/>
                    <Chart/>
                    {/* <Footer /> */}
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;