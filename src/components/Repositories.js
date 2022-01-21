import React from 'react';
import { useGlobalContext } from '../context'
import styled from 'styled-components'
import { Pie3D, Bar3D, Column3D, Doughnut2D, ExampleChart } from '../charts/index'
const Repositories = () => {
    const { repos } = useGlobalContext();
    console.log(repos)

    // **** MOST POPULAR LANGUAGE ***

    //calculate most popular language in repos
    const mostPopular = repos.reduce((total, currentItem) => {
        const { language } = currentItem;
        //sometimes we get null as a result so if we get null we skip this
        if (!language) {
            return total
        }
        //if we dont have property in our total with such lang when create it as object and give it value of 1, this will create object in total like this
        //{Javascript: {label: Javascript, value: 1}}
        if (!total[language]) {
            total[language] = { label: language, value: 1 };
            //else we add + 1 to value of this language so result in total will be {Javascript: {label: Javascript, value: 40}, CSS: {label: CSS, value: 35}, HTML: {label: HTML, value: 15}}
        } else {
            total[language] = { ...total[language], value: total[language].value + 1 };
        }
        return total;
    }, {})
    //now transform our result to array with help of Object.values so we get proper data for chart 
    let mostPopularChartData = Object.values(mostPopular);
    //also sort it
    mostPopularChartData = mostPopularChartData.sort((a, b) => b.value - a.value)

    /// **** MOST STARS ****
    const mostStars = repos.reduce((total, currentItem) => {
        const { language, stargazers_count } = currentItem;
        if (!language) return total;

        if (!total[language]) {
            total[language] = { label: language, value: stargazers_count }
        } else {
            total[language] = { ...total[language], value: total[language].value + stargazers_count };
        }
        return total;
    }, {})
    console.log(mostStars)
    let mostStarsChartData = Object.values(mostStars).sort((a, b) => b.value - a.value);
    const chartData = [
        {
            label: "HTML",
            value: "2900"
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
            <Pie3D data={mostPopularChartData} />
            <Column3D data={chartData} />
            <Doughnut2D data={mostStarsChartData} />
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
