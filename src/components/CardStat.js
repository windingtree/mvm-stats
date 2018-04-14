import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const CardStat = props => {
  const { mainTitile, mainValue, linkTitle, link, icon, textColor } = props;
  return (
    <div className="card-body text-center">
      <Link
        onMouseDown={()=>$('[data-toggle="tooltip"]').tooltip('hide') }
        to={link} className="card-icon" data-toggle="tooltip" data-placement="top" title={linkTitle}>
        <i className="wicon-help-outline link-light"></i>
      </Link>
      <i className={`wicon-${icon} text--xl`}></i>
      <h1 className="h5 text-muted"><strong>{mainTitile}</strong></h1>
      <p className={`mb-0 font--alt text--xxl ${textColor}`}> <strong>{mainValue}</strong></p>
    </div>
  )
}

CardStat.defaultProps = {
  linkTitle: 'More info...',
  link: 'FAQ',
}
export default CardStat;
