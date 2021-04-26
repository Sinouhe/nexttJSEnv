import React from 'react';
import classnames from 'classnames';

export type TitleProps = {
  label?: string;
  children?: JSX.Element;
  tag: keyof JSX.IntrinsicElements;
  className?: string;
};

const Title = ({
  label,
  tag: Tag = 'h1',
  children,
  className
}: TitleProps): JSX.Element => {
  return (
    <Tag className={classnames(`title__${Tag}`, className)}>
      {label || children}
    </Tag>
  );
};

export default Title;
