import './search.scss';

const Search = ( props ) => {
    return (
        <input placeholder='Search by Name' className='search-bar' onChange={props.SearchAntiVirus} />
    );
};

export default Search;