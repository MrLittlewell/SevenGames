import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModuleCard, ModuleCards } from './styled';
class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = '';

    if (activeTab === label) {
      className += ' -active';
    }

    return (
      <ModuleCard
        // className={className}
        onClick={onClick}
      >
        {label}
      </ModuleCard>
    );
  }
}

export default Tab;