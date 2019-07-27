import React,{Component} from 'react'


class Weather extends Component{
    render()
    { 
        return(
            <div>
                {this.props.temparature&& <p>temparature : {this.props.temparature}</p>}
                {this.props.city&& <p>city : {this.props.city}</p>}
                {this.props.country&& <p>country : {this.props.country}</p>}
                {this.props.humditity&& <p>humditity : {this.props.humditity}</p>}
                {this.props.description&& <p>description: {this.props.description}</p>}
                {this.props.error&& <p>error: {this.props.error}</p>}
            </div>
        )
    }
}
export default Weather