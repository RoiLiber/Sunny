import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { TextField, CircularProgress } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { SEARCH_ERROR_MSG } from '../../consts';
import { setCity } from '../../actions/mainActions';
import { fetchAutoCompleteOptions } from '../../api';
import colors from '../../styles/colorsVar';
import './style.scss';

const styles = () => ({
    textField: {
        '& fieldset, &:hover fieldset': {
            borderColor: `${colors.darkYellow} !important`,
        },
    },
    invisible: {
        display: 'none',
    },
    paper: {
        backgroundColor: `${colors.lightGreen} !important`,
        '& div:hover': {
            backgroundColor: `${colors.darkYellow} !important`,
        }
    }
});

const reg = /^[a-zA-Z ]+(-[a-zA-Z ]+)*$/;

function AutoComplete(props) {
    const { classes } = props;
    const dispatch = useDispatch();
    const darkMode = useSelector(state => state.mainReducer.darkMode);
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [isError, setIsError] = useState(false);
    const [citySearch, setCitySearch] = useState('');
    const loading = open && options.length === 0;

    async function handleSearchWordChanged(e, value) {

        setCitySearch(value);

        if (value.length < 1) {
            return setOpen(false)
        }
        if (value.length < 2 && open) {
            return setOpen(false)
        }
        if (!open) {
            setOpen(true)
        }
        try {
            const cities = await fetchAutoCompleteOptions(value);
            setIsError(false);
            setOptions(cities.map((city) => (
                { label: city.LocalizedName, key: city.Key, country: city.Country.LocalizedName })
            ));
        }
        catch (error) {
            setIsError(true)
        }
    }

    useEffect(() => {
        if (!open) {
            setOptions([])
        }
    }, [open]);

    return (
        <Autocomplete
            className={`auto_complete ${!darkMode ? 'light_mode' : ''}`}
            open={open}
            onClose={() => setOpen(false)}
            onChange={(e, value) => {
                if (!value) return;
                dispatch(setCity(value || {}))
            }}
            value={citySearch}
            onInputChange={handleSearchWordChanged}
            getOptionLabel={(option) => option && option.label && `${option.label}, ${option.country}`}
            options={options}
            loading={loading}
            classes={{ popupIndicator: classes.invisible, paper: classes.paper }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder="Search city"
                    fullWidth
                    value={citySearch}
                    onChange={(e) => {
                        if (!reg.test(e.target.value)) {
                            return
                        }
                        setCitySearch(citySearch)
                    }}
                    variant="outlined"
                    helperText={isError ? SEARCH_ERROR_MSG : ' '}
                    InputProps={{
                        ...params.InputProps,
                        classes: { root: classes.textField },
                        endAdornment: (
                            <>
                            {loading ? <CircularProgress color="primary" size={20} /> : null}
                            {params.InputProps.endAdornment}
                            </>
                        ),
                    }}
                />
            )}
        />
    )
}

export default withStyles(styles)(AutoComplete)
