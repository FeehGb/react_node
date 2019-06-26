import React, {Component} from 'react';



class List extends Component {
    render(){
        
        let list = []
        for (let i=0 ; i < 100; i++){
            let r = Math.random().toString(36).substring(7);
            list.push({
                name  : r,
                email : `${r}@softdib.com`
            })
            
        }
        return (
            <div className="List">
                
                <table border="1">
                    <tr>
                        <th>index</th>
                        <th>nome</th>
                        <th>email</th>
                    </tr>
                    {
                        list.map((item, index)=>{
                            return (
                            <tr>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                            )
                        })
                    }
                </table>
            </div>
        );
    }
}


export default List;
