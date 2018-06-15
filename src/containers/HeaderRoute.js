import { connect } from 'react-redux';
import Header from '../components/Header/Header';
import { setPageChange } from '../actions';

const mapStateToProps = (state) => ({
  page: state.page
});

const mapDispatchToProps = (dispatch) => ({
  onPageChange: (ref) => dispatch(setPageChange(ref.to));
});