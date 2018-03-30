import React from 'react'
import {Grid} from 'semantic-ui-react';
import classnames from 'classnames';
import styles from './FormField.module.scss';

const FormField = ({children, contentWidth, verticalAlign, label, subLabel, customClass, labelAlign, disabled,
  noTransform}) => {
  const subLabelElement = subLabel ? <div className={styles.subLabel}>{subLabel}</div> : undefined;

  const wrapperClass = classnames(styles.formField, {
    [styles.noTransform]: noTransform,
    [customClass]: customClass
  });

  return (<Grid columns={2} className={wrapperClass}>
    <Grid.Row>
      <Grid.Column textAlign={labelAlign} verticalAlign={verticalAlign} width={16 - contentWidth}>
        <div className={classnames(styles.label, {[styles.disabled]: disabled})}>{label}</div>
        {subLabelElement}
      </Grid.Column>
      <Grid.Column textAlign="left" width={contentWidth}>
        {children}
      </Grid.Column>
    </Grid.Row>
  </Grid>);
};

FormField.defaultProps = {
  labelAlign: 'right',
  verticalAlign: 'middle',
  contentWidth: 8
};

FormField.propTypes = {
  children: React.PropTypes.object.isRequired,
  contentWidth: React.PropTypes.number, // number of columns the content should span -> from 1 to 16
  verticalAlign: React.PropTypes.string, // vertical align of the label
  label: React.PropTypes.string.isRequired, // the label assigned to the field
  subLabel: React.PropTypes.string, // any second-line label, note or hint to be displayed
  customClass: React.PropTypes.string, // custom class if there needs to be any, such as 'no-transform' for normal text
  labelAlign: React.PropTypes.string, // custom label alignment, default is right
  disabled: React.PropTypes.bool,
  noTransform: React.PropTypes.bool //whether noTransform class should be applied.
};

export default FormField;
