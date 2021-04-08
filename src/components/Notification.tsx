import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


interface notiProps {
    title?: string;
    subtitle?: string;
    isOn: boolean;
}
export const SwitchesGroup = (props:notiProps)=> {
    const [state, setState] = React.useState({
        isOn: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormControl component="fieldset">

            <FormGroup>
                <div>
                    <h5>{props.title}</h5>
                    <p>{props.subtitle}</p>

                <FormControlLabel
                    control={<Switch checked={state.isOn} onChange={handleChange} name="isOn" />}
                    label=""
                /></div>
            </FormGroup>

        </FormControl>
    );
}
