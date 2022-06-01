import './new-anti-virus-form.scss';

const NewAntiVirusForm = ( props ) => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        props.AddAntiVirus(event);
    }

    return (
        <div className="new-anti-virus-form">
            <h2>Add New Anti Virus</h2>
            <form onSubmit={onSubmitHandler} >
                <input placeholder='Anti Virus Name'/>
                <input placeholder='First Pointer'/>
                <input placeholder='Second Pointer'/>
                <input placeholder='Third Pointer'/>
                <input placeholder='Fourth Pointer'/>
                <input placeholder='Score 1-10' type='number'/>
                <input type='file' className='image-upload'/>
                <label>Slogan Rating</label>
                <select>
                    <option>Superb</option>
                    <option>Excellent</option>
                    <option>Very Good</option>
                    <option>Good</option>
                </select>
                <label className='special-label'>Compatibility - Apple,iOS,PC,Android</label>
                <input type='checkbox' className='checkbox'/> <input type='checkbox' className='checkbox'/> <input type='checkbox' className='checkbox'/> <input type='checkbox' className='checkbox'/>
                <button>Add</button>
            </form>
        </div>
    );
};

export default NewAntiVirusForm;