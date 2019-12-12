import {React,Component} from 'react'

const debounce = (fn, delay) => {
    let timer = null;
    return function (...args) {
        const context = this;
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
    }
class PlaceSearch extends Component {
    state = {
        q: '',
        places: [],
    }
    fetchPlaces=(q)=> {
        fetch(`http://www.example.com/places/`, {
            params: {q}
        }).then(response => {
            this.setState({places: response.data.places});
        });
    }
    constructor(props) {
        super(props);
        this.fetchPlaces = debounce(this.fetchPlaces, 200);
    }
    onSearchChange=(ev)=> {
        const q = ev.target.value;
        this.setState({q: q});
        this.fetchPlaces(q);
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.q}
                    onChange={this.onSearchChange.bind(this)}
                    placeholder="Search for a place"
                />
                {this.state.places.map(place => (
                    <div key={place.id} className="placePick">
                        <a href={`?place_id=${place.id}`}>{place.name}</a>
                    </div>
                ))}
            </div>
        );
    }
}
export default PlaceSearch;