const DigitalMusicInterface = (props) => {
    const { dmiSpecification } = props;
    const { name, inputMethods } = dmiSpecification;

    return (
        <div>
            <p>{ name }</p>
            <div>
                { inputMethods.map(input => mapInputToComponent(input)) }
            </div>
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
            return <div>Button</div>
        default:
            throw new Error("unknown physical type for discrete input");
    }
}

const mapContinuousInputToComponent = (input) => {
    switch (input.physicalType) {
        case 'knob':
            return <div>Slider</div>
        default:
            throw new Error("unknown physical type for continuous input");
    }
}

export default DigitalMusicInterface;