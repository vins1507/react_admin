import './WidgetLarge.css'


export default function WidgetLarge() {

    const Button=({type})=>{
        return <button className={'widgetLgButton '+type}>{type}</button>
    }

    return (
        <div className='widgetlarge'>
           <h3 className="widgetLgTitle">Latest Transaction</h3>
           <table className="widgLgTable">
               <tr className="widgettableLgtr">
                   <th className="widgetLgtableTh">Customer</th>
                   <th className="widgetLgtableTh">Date</th>
                   <th className="widgetLgtableTh">Amount</th>
                   <th className="widgetLgtableTh">Status</th>
               </tr>
               <tr className="widgettableLgtr">
                   <td className="widgetLguser">
                       <img src="https://images.unsplash.com/photo-1525450824786-227cbef70703?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                       <span className="widgetLguserName">Jivitaz</span>
                   </td>
                   <td className="widgetLgDate">2 jun 2021</td>
                   <td className="widgetLgAmt">$122.00</td>
                   <td className='widgetStatus'>
                       <Button type='Approved'/>
                   </td>
                       
                   
               </tr>
               <tr className="widgettableLgtr">
                   <td className="widgetLguser">
                       <img src="https://images.unsplash.com/photo-1573496129661-bd7fcc7e532b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHNvZnR3YXJlJTIwZW5naW5lZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                       <span className="widgetLguserName">Florencea</span>
                   </td>
                   <td className="widgetLgDate">2 jun 2021</td>
                   <td className="widgetLgAmt">$122.00</td>
                   <td className='widgetStatus'>
                       <Button type='Declined'/>
                   </td>
                       
                   
               </tr>
               <tr className="widgettableLgtr">
                   <td className="widgetLguser">
                       <img src="https://images.unsplash.com/photo-1488716656724-3c8820d714a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGdpcmwlMjB3aXRoJTIwcGV0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                       <span className="widgetLguserName">mumziath</span>
                   </td>
                   <td className="widgetLgDate">2 jun 2021</td>
                   <td className="widgetLgAmt">$122.00</td>
                   <td className='widgetStatus'>
                       <Button type='Pending'/>
                   </td>
                       
                   
               </tr>
               <tr className="widgettableLgtr">
                   <td className="widgetLguser">
                       <img src="https://images.unsplash.com/photo-1552046217-d040ebd205e7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fGdpcmwlMjB3aXRoJTIwcGV0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                       <span className="widgetLguserName">zeegvotz</span>
                   </td>
                   <td className="widgetLgDate">2 jun 2021</td>
                   <td className="widgetLgAmt">$122.00</td>
                   <td className='widgetStatus'>
                       <Button type='Approved'/>
                   </td>
                       
                   
               </tr>
           </table>
        </div>
    )
}
