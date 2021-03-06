import React, {Component} from 'react';
import TabNav from './tabnav';
import NewsletterGrid from './newsletter/newsletterGrid';


class Dashboard extends Component
{

    constructor(props)
    {
        super(props);

        this.state = {
            tabs: [
                {
                    title: 'Newsletter',
                    active: true,
                    component: <NewsletterGrid/>
                },
                {
                    title: 'Requests',
                    active: false,
                    component: <h4>Hey There - Requests</h4>
                }
            ]
        }
    }

    handleTabChange = (title) => {
        const tabs = this.state.tabs;
        tabs.map((tab, index) => {
            //tab.active = false;
            if(tab.title == title)
            {
                tab.active = true;
            }
            else
            {
                tab.active = false;
            }
        })

        this.setState({tabs});
        console.log("clicked on tab", title);
    }


  render()
  {
    return(
        <div className="dashboard">
            <TabNav handleClick={(title) => this.handleTabChange(title)} tabs={this.state.tabs}/>
        </div>
    )
  }
}

export default Dashboard;