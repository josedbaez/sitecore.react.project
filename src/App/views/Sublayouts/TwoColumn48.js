var React = require("react");
var Placeholder = require("./../placeholders/Placeholder");

var TwoColumn48 = React.createClass({
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <Placeholder placeholderKey={'col-narrow-1'} isDynamic={true} content={this.props.children} />
                    </div>
                    <div class="col-md-8">
                        <Placeholder placeholderKey={'col-wide-1'} isDynamic={true} content={this.props.children} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TwoColumn48;