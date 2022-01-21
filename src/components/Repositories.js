import React from 'react';
import { useGlobalContext } from '../context'
import styled from 'styled-components'
import { Pie3D, Bar3D, Column3D, Doughnut2D, ExampleChart } from '../charts/index'
const Repositories = () => {
    const { repos } = useGlobalContext();
    console.log(repos)
    const chartData = [
        {
            label: "HTML",
            value: "290"
        },
        {
            label: "CSS",
            value: "260"
        },
        {
            label: "Javascript",
            value: "180"
        },

    ];
    return <section className='section'>
        <Wrapper className='section-center'>
            {/* <ExampleChart data={chartData} /> */}
            <Pie3D data={chartData} />
            <Column3D data={chartData} />
            <Doughnut2D data={chartData} />
            <Bar3D data={chartData} />
        </Wrapper>
    </section>
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }
  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repositories;
