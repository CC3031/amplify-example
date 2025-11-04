'use client';
import Link from 'next/link';

export default function Header() {
  const hrefs = [
      '/',
      '/arcs/black_swordsman',
      '/arcs/golden_age',
      '/arcs/conviction',
      '/arcs/falcon_of_the_millennium',
      '/arcs/fantasia'
    ];

    return (
        <header>
        <Link className="mainLink" href={hrefs[0]}>Berserk Arc Analysis Website</Link>
        <nav>
          <Link className="links" href={hrefs[1]}>Black Swordsman</Link>
          <Link className="links" href={hrefs[2]}>Golden Age</Link>
          <Link className="links" href={hrefs[3]}>Conviction</Link>
          <Link className="links" href={hrefs[4]}>Falcon of the Millennium</Link>
          <Link className="links" href={hrefs[5]}>Fantasia</Link>

        </nav>
      </header>
    );
}