import React from 'react';
import ContentRow from './ContentRow';
import './Content.scss';

const Content = ({ isOpen }) => {
  const rows = [
    ['Class1', 'Applied', 'Final', '24 Jan 2024', '--'],
    ['Class2', 'Unapply', 'Final', '24 Dec 2025', '--'],
    ['Class3', 'Pending', 'Draft', '10 Mar 2023', '--'],
    ['Class4', 'Applied', 'Final', '15 Feb 2024', '--'],
    ['Class5', 'Unapply', 'Draft', '18 Apr 2023', '--'],
    ['Class6', 'Pending', 'Draft', '23 Jun 2024', '--'],
    ['Class7', 'Applied', 'Final', '12 Jul 2023', '--'],
    ['Class8', 'Unapply', 'Final', '05 Sep 2025', '--'],
    ['Class9', 'Applied', 'Draft', '17 Aug 2024', '--'],
    ['Class10', 'Pending', 'Final', '22 Oct 2024', '--'],
    ['Class11', 'Applied', 'Final', '14 Nov 2023', '--'],
    ['Class12', 'Unapply', 'Draft', '29 Dec 2024', '--'],
    ['Class13', 'Pending', 'Final', '08 Jan 2025', '--'],
    ['Class14', 'Applied', 'Draft', '21 Feb 2023', '--'],
    ['Class15', 'Unapply', 'Final', '03 Mar 2024', '--'],
    ['Class16', 'Pending', 'Draft', '11 Apr 2023', '--'],
    ['Class17', 'Applied', 'Final', '26 May 2025', '--'],
    ['Class18', 'Unapply', 'Draft', '14 Jun 2023', '--'],
    ['Class19', 'Pending', 'Final', '09 Jul 2024', '--'],
    ['Class20', 'Applied', 'Draft', '13 Aug 2025', '--'],
    ['Class21', 'Unapply', 'Final', '30 Sep 2023', '--'],
    ['Class22', 'Pending', 'Draft', '07 Oct 2024', '--'],
    ['Class23', 'Applied', 'Final', '15 Nov 2023', '--'],
    ['Class24', 'Unapply', 'Draft', '22 Dec 2024', '--'],
    ['Class25', 'Pending', 'Final', '04 Jan 2025', '--'],
    ['Class26', 'Applied', 'Draft', '27 Feb 2023', '--'],
    ['Class27', 'Unapply', 'Final', '10 Mar 2024', '--'],
    ['Class28', 'Pending', 'Draft', '25 Apr 2023', '--'],
    ['Class29', 'Applied', 'Final', '02 May 2025', '--'],
    ['Class30', 'Unapply', 'Draft', '18 Jun 2023', '--'],
  ];

  return (
    <>
      <div className={`content ${isOpen ? 'open' : ''}`}>
        {rows.map((row, index) => (
          <ContentRow key={index} rowData={row} />
        ))}
      </div>

      {/* Arrow Demo section */}

      <div
        className="ArrowSample"
        style={{ border: '1px solid red', marginTop: '40px' }}
      >
        {/* 原有箭头渲染 */}
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className={`box box${i + 1}`} />
        ))}
        {/* 新增的 From 和 To 标记框 */}
        <div className="from-box">From</div> {/* 原有 */}
        <div className="to-box">To</div> {/* 原有 */}
      </div>

      <div
        className="ArrowSample1"
        style={{ border: '1px solid red', marginTop: '40px' }}
      >
        {/* 原有箭头渲染 */}
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className={`box box${i + 1}`} />
        ))}
        {/* 新增的 From 和 To 标记框 */}
        <div className="to-box">To</div> {/* 修改：右到左时终点是 From */}
        <div className="from-box">From</div> {/* 修改：右到左时起点是 To */}
      </div>
    </>
  );
};

export default Content;
