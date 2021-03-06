import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View, 
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card } from './common';
import * as actions from '../actions';

class ListItem extends Component {

    componentWillUpdate() {
        //LayoutAnimation.spring();
        LayoutAnimation.linear();
    }

    renderDescription() {
        console.log(this.props.selectedLibraryId);
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {library.item.description}
                    </Text>
                </CardSection>
                
            );
        }
    }

    render() {
        const { id, title } = this.props.library.item;

        return (
            <TouchableWithoutFeedback 
                onPress={() => {this.props.selectLibrary(id)}}
            >
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {title}                
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id;

    return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);