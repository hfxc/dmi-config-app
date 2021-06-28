import { Grid, Button, Slider } from '@material-ui/core';

const DigitalMusicInterface = (props) => {
    const { specification } = props;
    const { name, inputMethods } = specification;

    return (
        <div>
            <p>{ name }</p>
            <Grid container spacing={5} justify="center">
                { inputMethods.map(input => <Grid item key={input.$id}>{mapInputToComponent(input)}</Grid>) }
            </Grid>
        </div>
    );
};

const mapInputToComponent = (input) => {
    switch (input.type) {
        case 'discrete':
            return mapDiscreteInputToComponent(input);
        case 'continuous':
            return mapContinuousInputToComponent(input);
        default:
            throw new Error("unknown input type");
    }
};

const mapDiscreteInputToComponent = (input) => {
    switch (input.physicalType) {
        case 'button':
            return (
                <Button variant="contained" color="secondary">
                    { input.note }
                </Button>
            )
        default:
            throw new Error("unknown physical type for discrete input");
    }
}

const mapContinuousInputToComponent = (input) => {
    switch (input.physicalType) {
        case 'knob':
            return (
                <Slider style={{ width: 250 }}
                    min={ input.minRange }
                    max={ input.maxRange }
                    marks={ [
                        { value: input.minRange, label: input.minRange.toString() },
                        { value: input.maxRange, label: input.maxRange.toString() }
                    ] }
                    aria-labelledby="continuous-slider"
                />
            )
        default:
            throw new Error("unknown physical type for continuous input");
    }
}

export default DigitalMusicInterface;