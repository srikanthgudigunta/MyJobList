import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        backgroundColor: '#517ca7',
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 40,
        borderRadius: 10,
        paddingLeft: 16,
        paddingRight: 14
    },
    item: {
        padding: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#eee'
    },
    time: {
        fontStyle: 'italic',
        color: '#A9A9A9',
        marginTop: 5
    },
    title: {
        fontWeight: 'bold',
        color: '#517ca7'
    },
    mainCardView: {
        height: 90,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        shadowColor: '#B8B8B8',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'column',
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
    },
});

export { styles }