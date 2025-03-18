import { Slide } from '../types/presentation';

export const defaultPresentation = {
  title: "PLEAD: Democratizing Access to Legal Services with AI",
  slides: [
    // Slide 1: Title
    {
      id: "slide-1",
      content: `
        <div style="text-align: center">
          <h1 style="font-size: 2.5rem; font-weight: bold; margin-bottom: 1rem;">PLEAD</h1>
          <h2 style="font-size: 1.5rem; margin-bottom: 2rem;">Democratizing Access to Legal Services with AI</h2>
          <div style="width: 6rem; height: 6rem; background-color: #eee; border-radius: 50%; margin: 0 auto 2rem; display: flex; align-items: center; justify-content: center;">
            <span style="font-size: 1.5rem; font-weight: bold;">LOGO</span>
          </div>
          <p style="font-style: italic; margin-top: 1rem; font-size: 1.25rem;">Transforming legal services in Latin America</p>
        </div>
      `,
      background: { color: "#ffffff" }
    },

    // Slide 2: The Problem
    {
      id: "slide-2",
      content: `
        <div>
          <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">THE PROBLEM</h2>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem;">
              <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">For Users</h3>
              <ul style="list-style: none; margin: 0; padding: 0;">
                <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                  <div style="color: #ef4444; margin-right: 0.5rem;">●</div>
                  <span>Only 23% of Latin Americans with legal problems access professional advice</span>
                </li>
                <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                  <div style="color: #ef4444; margin-right: 0.5rem;">●</div>
                  <span>Prohibitive costs ($80-150 USD/hour)</span>
                </li>
                <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                  <div style="color: #ef4444; margin-right: 0.5rem;">●</div>
                  <span>Complex processes and technical language</span>
                </li>
                <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                  <div style="color: #ef4444; margin-right: 0.5rem;">●</div>
                  <span>Long wait times (3-5 weeks for simple inquiries)</span>
                </li>
                <li style="display: flex; align-items: flex-start;">
                  <div style="color: #ef4444; margin-right: 0.5rem;">●</div>
                  <span>38% with unresolved legal problems suffer negative effects</span>
                </li>
              </ul>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem;">
              <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem;">For Lawyers</h3>
              <ul style="list-style: none; margin: 0; padding: 0;">
                <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                  <div style="color: #ef4444; margin-right: 0.5rem;">●</div>
                  <span>48% of non-billable time lost on administrative tasks</span>
                </li>
                <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                  <div style="color: #ef4444; margin-right: 0.5rem;">●</div>
                  <span>High client acquisition cost ($300 USD average)</span>
                </li>
                <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                  <div style="color: #ef4444; margin-right: 0.5rem;">●</div>
                  <span>Inefficient legal validation (5-10 hours weekly)</span>
                </li>
                <li style="display: flex; align-items: flex-start;">
                  <div style="color: #ef4444; margin-right: 0.5rem;">●</div>
                  <span>Low digitalization (only 35% of firms use advanced digital tools)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      `,
      background: { color: "#ffffff" }
    },

    // Slide 3: Our Solution
    {
      id: "slide-3",
      content: `
        <div>
          <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">OUR SOLUTION</h2>
          <h3 style="font-size: 1.25rem; font-style: italic; margin-bottom: 1rem;">Plead: A comprehensive platform revolutionizing legal services</h3>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div>
              <div style="background-color: #edf5ff; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                <h4 style="font-weight: 600; margin-bottom: 0.5rem;">AI Legal Assistant</h4>
                <ul style="margin-left: 1.25rem; font-size: 0.875rem;">
                  <li>Free answers to basic legal questions</li>
                  <li>Guidance on common legal procedures</li>
                  <li>Knowledge base adapted to local regulations</li>
                </ul>
              </div>
              
              <div style="background-color: #ecfdf5; padding: 1rem; border-radius: 0.5rem;">
                <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Legal Document Generation</h4>
                <ul style="margin-left: 1.25rem; font-size: 0.875rem;">
                  <li>Customized contracts, letters, appeals & forms</li>
                  <li>Automatic validation against current legislation</li>
                  <li>Real-time updates based on regulatory changes</li>
                </ul>
              </div>
            </div>
            
            <div>
              <div style="background-color: #fffbeb; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Legal Services Marketplace</h4>
                <ul style="margin-left: 1.25rem; font-size: 0.875rem;">
                  <li>Connection with verified lawyers by specialty</li>
                  <li>Rating system and price transparency</li>
                  <li>Real-time case tracking</li>
                </ul>
              </div>
              
              <div style="background-color: #faf5ff; padding: 1rem; border-radius: 0.5rem;">
                <h4 style="font-weight: 600; margin-bottom: 0.5rem;">Tools for Professionals</h4>
                <ul style="margin-left: 1.25rem; font-size: 0.875rem;">
                  <li>AI-powered legal validation</li>
                  <li>Customizable professional document generation</li>
                  <li>Integrated CRM for client tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      background: { color: "#ffffff" }
    },

    // Slide 4: Market Opportunity
    {
      id: "slide-4",
      content: `
        <div>
          <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">MARKET OPPORTUNITY</h2>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
            <div style="background-color: #edf5ff; padding: 1rem; border-radius: 0.5rem; text-align: center;">
              <div style="font-size: 1.875rem; font-weight: bold; margin-bottom: 0.5rem;">$84B</div>
              <div style="font-size: 0.875rem;">Total Addressable Market</div>
              <div style="font-size: 0.75rem; font-style: italic;">(Legal market in Latin America)</div>
            </div>
            <div style="background-color: #edf5ff; padding: 1rem; border-radius: 0.5rem; text-align: center;">
              <div style="font-size: 1.875rem; font-weight: bold; margin-bottom: 0.5rem;">$15B</div>
              <div style="font-size: 0.875rem;">Serviceable Addressable Market</div>
              <div style="font-size: 0.75rem; font-style: italic;">(Digitalizable legal services)</div>
            </div>
            <div style="background-color: #edf5ff; padding: 1rem; border-radius: 0.5rem; text-align: center;">
              <div style="font-size: 1.875rem; font-weight: bold; margin-bottom: 0.5rem;">$450M</div>
              <div style="font-size: 0.875rem;">Serviceable Obtainable Market</div>
              <div style="font-size: 0.75rem; font-style: italic;">(5-year goal, 3% of SAM)</div>
            </div>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem;">
            <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Favorable Trends</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div style="display: flex; align-items: flex-start;">
                <div style="color: #22c55e; margin-right: 0.5rem;">✓</div>
                <span>Online legal services growing at 15% CAGR globally</span>
              </div>
              <div style="display: flex; align-items: flex-start;">
                <div style="color: #22c55e; margin-right: 0.5rem;">✓</div>
                <span>Legaltech investment reached $1B record in 2022</span>
              </div>
              <div style="display: flex; align-items: flex-start;">
                <div style="color: #22c55e; margin-right: 0.5rem;">✓</div>
                <span>Global legaltech market exceeded $28B in 2022</span>
              </div>
              <div style="display: flex; align-items: flex-start;">
                <div style="color: #22c55e; margin-right: 0.5rem;">✓</div>
                <span>70% of 200-250 LATAM legaltech startups in Mexico, Argentina, Colombia</span>
              </div>
            </div>
          </div>
        </div>
      `,
      background: { color: "#ffffff" }
    },

    // Slide 5: Business Model
    {
      id: "slide-5",
      content: `
        <div>
          <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">BUSINESS MODEL</h2>
          <h3 style="font-size: 1.25rem; font-style: italic; margin-bottom: 1rem;">Diversified and scalable revenue streams</h3>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem;">
              <h4 style="font-weight: 600; margin-bottom: 0.75rem;">Freemium for Users</h4>
              <ul style="list-style: none; margin: 0; padding: 0;">
                <li style="margin-bottom: 0.5rem;">• Basic features free</li>
                <li style="margin-bottom: 0.5rem;">• Premium subscription ($9.99/month): unlimited documents and advanced inquiries</li>
                <li>• Pay-per-use for specific documents ($5-30)</li>
              </ul>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem;">
              <h4 style="font-weight: 600; margin-bottom: 0.75rem;">Marketplace</h4>
              <ul style="list-style: none; margin: 0; padding: 0;">
                <li style="margin-bottom: 0.5rem;">• 15% commission on contracted services</li>
                <li>• Visibility tools for lawyers ($50-200/month)</li>
              </ul>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem;">
              <h4 style="font-weight: 600; margin-bottom: 0.75rem;">SaaS for Law Firms</h4>
              <ul style="list-style: none; margin: 0; padding: 0;">
                <li style="margin-bottom: 0.5rem;">• Professional subscription ($99-499/month depending on size)</li>
                <li>• Integration with existing systems (+$200/month)</li>
              </ul>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem;">
              <h4 style="font-weight: 600; margin-bottom: 0.75rem;">B2B Enterprise</h4>
              <ul style="list-style: none; margin: 0; padding: 0;">
                <li>• Customized solutions for corporations and governments</li>
              </ul>
            </div>
          </div>
          
          <div style="margin-top: 1.5rem; background-color: #edf5ff; padding: 1rem; border-radius: 0.5rem;">
            <h4 style="font-weight: 600; margin-bottom: 0.75rem;">Key Metrics</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
              <div>
                <div style="font-weight: 600;">CAC</div>
                <div>$40 (users) / $120 (lawyers)</div>
              </div>
              <div>
                <div style="font-weight: 600;">LTV</div>
                <div>$240 (users) / $2,400 (lawyers)</div>
              </div>
              <div>
                <div style="font-weight: 600;">Gross Margin</div>
                <div>75-85%</div>
              </div>
            </div>
          </div>
        </div>
      `,
      background: { color: "#ffffff" }
    },

    // Slide 6: Competition & Differentiation
    {
      id: "slide-6",
      content: `
        <div>
          <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">COMPETITION & DIFFERENTIATION</h2>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
            <div>
              <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Competitive Landscape</h3>
              <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem;">
                <p style="margin-bottom: 0.5rem;"><strong>Direct competitors:</strong></p>
                <p style="font-size: 0.875rem; margin-bottom: 0.75rem;">MisAbogados (Chile), Legalo (Colombia)</p>
                
                <p style="margin-bottom: 0.5rem;"><strong>Indirect competitors:</strong></p>
                <p style="font-size: 0.875rem;">Lemontech (firm management), Derecho24 (marketplace), traditional services</p>
              </div>
            </div>
            
            <div>
              <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Our Advantages</h3>
              <div style="background-color: #edf5ff; padding: 1rem; border-radius: 0.5rem;">
                <ul style="list-style: none; margin: 0; padding: 0;">
                  <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                    <div style="color: #3b82f6; margin-right: 0.5rem; font-weight: bold;">1.</div>
                    <span><strong>Comprehensive approach:</strong> Only end-to-end solution combining consultative AI, automated documents, and lawyer marketplace</span>
                  </li>
                  <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                    <div style="color: #3b82f6; margin-right: 0.5rem; font-weight: bold;">2.</div>
                    <span><strong>Proprietary technology:</strong> AI specialized in Latin American local law</span>
                  </li>
                  <li style="display: flex; align-items: flex-start;">
                    <div style="color: #3b82f6; margin-right: 0.5rem; font-weight: bold;">3.</div>
                    <span><strong>Hybrid model:</strong> Unique combination of AI + human network of certified professionals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem;">
            <div style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
              <div style="color: #3b82f6; margin-right: 0.5rem; font-weight: bold;">4.</div>
              <span><strong>User experience:</strong> Intuitive interfaces that translate legal jargon into simple language</span>
            </div>
            <div style="display: flex; align-items: flex-start;">
              <div style="color: #3b82f6; margin-right: 0.5rem; font-weight: bold;">5.</div>
              <span><strong>Founding team:</strong> Combined experience in technology, scaling, and law</span>
            </div>
          </div>
        </div>
      `,
      background: { color: "#ffffff" }
    },

    // Slide 7: Traction & Validation
    {
      id: "slide-7",
      content: `
        <div>
          <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">TRACTION & VALIDATION</h2>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div>
              <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Current Progress</h3>
              <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem;">
                <ul style="list-style: none; margin: 0; padding: 0;">
                  <li style="display: flex; align-items: flex-start; margin-bottom: 0.75rem;">
                    <div style="color: #22c55e; margin-right: 0.5rem;">✓</div>
                    <span>Functional MVP with AI assistant and basic document generation</span>
                  </li>
                  <li style="display: flex; align-items: flex-start; margin-bottom: 0.75rem;">
                    <div style="color: #22c55e; margin-right: 0.5rem;">✓</div>
                    <span>Beta with 50 users</span>
                  </li>
                  <li style="display: flex; align-items: flex-start;">
                    <div style="color: #22c55e; margin-right: 0.5rem;">✓</div>
                    <span>78% retention rate in beta phase</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Strategic Alliances</h3>
              <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem;">
                <ul style="list-style: none; margin: 0; padding: 0;">
                  <li style="display: flex; align-items: flex-start; margin-bottom: 0.75rem;">
                    <div style="color: #3b82f6; margin-right: 0.5rem;">●</div>
                    <span>[Legal firm name] for legal content validation</span>
                  </li>
                  <li style="display: flex; align-items: flex-start; margin-bottom: 0.75rem;">
                    <div style="color: #3b82f6; margin-right: 0.5rem;">●</div>
                    <span>[Accelerator/Incubator] for technological development</span>
                  </li>
                  <li style="display: flex; align-items: flex-start;">
                    <div style="color: #3b82f6; margin-right: 0.5rem;">●</div>
                    <span>[Lawyers association] for marketplace expansion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      background: { color: "#ffffff" }
    },

    // Slide 8: Financial Projections
    {
      id: "slide-8",
      content: `
        <div>
          <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">FINANCIAL PROJECTIONS (5 YEARS)</h2>
          
          <div style="margin-bottom: 1.5rem;">
            <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse;">
                <thead>
                  <tr>
                    <th style="padding: 0.5rem 1rem; text-align: left; border-bottom: 1px solid #e2e8f0;">Year</th>
                    <th style="padding: 0.5rem 1rem; text-align: left; border-bottom: 1px solid #e2e8f0;">Users</th>
                    <th style="padding: 0.5rem 1rem; text-align: left; border-bottom: 1px solid #e2e8f0;">Lawyers</th>
                    <th style="padding: 0.5rem 1rem; text-align: left; border-bottom: 1px solid #e2e8f0;">Revenue (USD)</th>
                    <th style="padding: 0.5rem 1rem; text-align: left; border-bottom: 1px solid #e2e8f0;">EBITDA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">1</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">50K</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">500</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">$1.2M</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">-$600K</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">2</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">200K</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">2K</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">$5.8M</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">$800K</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">3</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">750K</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">5K</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">$18M</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">$5.4M</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">4</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">1.8M</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">10K</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">$45M</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">$15.3M</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">5</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">3.5M</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">18K</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">$85M</td>
                    <td style="border: 1px solid #e2e8f0; padding: 0.5rem 1rem;">$34M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div style="background-color: #edf5ff; padding: 1rem; border-radius: 0.5rem;">
              <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Key Metrics</h3>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                  <p style="font-weight: 600;">Break-even</p>
                  <p>Year 2</p>
                </div>
                <div>
                  <p style="font-weight: 600;">Gross Margin</p>
                  <p>75-85%</p>
                </div>
                <div>
                  <p style="font-weight: 600;">User Growth</p>
                  <p>~190% CAGR</p>
                </div>
                <div>
                  <p style="font-weight: 600;">Revenue CAGR</p>
                  <p>~190%</p>
                </div>
              </div>
            </div>
            
            <div style="background-color: #ecfdf5; padding: 1rem; border-radius: 0.5rem; display: flex; flex-direction: column; justify-content: center;">
              <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Success Benchmark</h3>
              <p>Case study: Reclamador (Spain) resolved 100,000+ cases in a decade, recovering €225 million for clients</p>
            </div>
          </div>
        </div>
      `,
      background: { color: "#ffffff" }
    },

    // Slide 9: Investment Round
    {
      id: "slide-9",
      content: `
        <div>
          <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">INVESTMENT ROUND</h2>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div>
              <div style="background-color: #edf5ff; padding: 1.5rem; border-radius: 0.5rem; margin-bottom: 1.5rem; text-align: center;">
                <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem;">Seeking</h3>
                <div style="font-size: 2rem; font-weight: bold; color: #3b82f6;">$800,000</div>
                <p style="margin-top: 0.5rem;">25% equity (pre-money valuation: $2.4M)</p>
              </div>
              
              <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem;">
                <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Target Investors</h3>
                <ul style="list-style: none; margin: 0; padding: 0;">
                  <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                    <div style="color: #3b82f6; margin-right: 0.5rem;">●</div>
                    <span>Seed funds focused on legal tech</span>
                  </li>
                  <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                    <div style="color: #3b82f6; margin-right: 0.5rem;">●</div>
                    <span>Angels with B2B/B2C SaaS experience</span>
                  </li>
                  <li style="display: flex; align-items: flex-start;">
                    <div style="color: #3b82f6; margin-right: 0.5rem;">●</div>
                    <span>Family offices interested in digital transformation</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Use of Funds</h3>
              <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem;">
                <div style="margin-bottom: 1rem;">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                    <span>Technological development</span>
                    <span>40%</span>
                  </div>
                  <div style="width: 100%; background-color: #e2e8f0; border-radius: 9999px; height: 0.625rem;">
                    <div style="background-color: #3b82f6; height: 0.625rem; border-radius: 9999px; width: 40%;"></div>
                  </div>
                  <p style="font-size: 0.75rem; margin-top: 0.25rem;">AI improvement, new features</p>
                </div>
                
                <div style="margin-bottom: 1rem;">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                    <span>Marketing & user acquisition</span>
                    <span>30%</span>
                  </div>
                  <div style="width: 100%; background-color: #e2e8f0; border-radius: 9999px; height: 0.625rem;">
                    <div style="background-color: #10b981; height: 0.625rem; border-radius: 9999px; width: 30%;"></div>
                  </div>
                </div>
                
                <div style="margin-bottom: 1rem;">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                    <span>Lawyer network expansion</span>
                    <span>20%</span>
                  </div>
                  <div style="width: 100%; background-color: #e2e8f0; border-radius: 9999px; height: 0.625rem;">
                    <div style="background-color: #f59e0b; height: 0.625rem; border-radius: 9999px; width: 20%;"></div>
                  </div>
                </div>
                
                <div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 0.25rem;">
                    <span>Geographic expansion</span>
                    <span>10%</span>
                  </div>
                  <div style="width: 100%; background-color: #e2e8f0; border-radius: 9999px; height: 0.625rem;">
                    <div style="background-color: #ef4444; height: 0.625rem; border-radius: 9999px; width: 10%;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      background: { color: "#ffffff" }
    },

    // Slide 10: Roadmap
    {
      id: "slide-10",
      content: `
        <div>
          <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">ROADMAP</h2>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
            <div>
              <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Next 12 Months</h3>
              <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem;">
                <ul style="list-style: none; margin: 0; padding: 0;">
                  <li style="display: flex; margin-bottom: 1rem;">
                    <div style="min-width: 6rem; font-weight: 600;">Q2 2025</div>
                    <div>Public launch in Mexico</div>
                  </li>
                  <li style="display: flex; margin-bottom: 1rem;">
                    <div style="min-width: 6rem; font-weight: 600;">Q3 2025</div>
                    <div>Expansion to Colombia and Chile</div>
                  </li>
                  <li style="display: flex; margin-bottom: 1rem;">
                    <div style="min-width: 6rem; font-weight: 600;">Q4 2025</div>
                    <div>Smart contracts and digital signature integration</div>
                  </li>
                  <li style="display: flex;">
                    <div style="min-width: 6rem; font-weight: 600;">Q1 2026</div>
                    <div>Launch in Brazil and Argentina</div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">5-Year Vision</h3>
              <div style="background-color: #edf5ff; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                <ul style="list-style: none; margin: 0; padding: 0;">
                  <li style="display: flex; align-items: flex-start; margin-bottom: 0.75rem;">
                    <div style="color: #3b82f6; margin-right: 0.5rem;">●</div>
                    <span>Consolidation as the leading legal platform in Latin America</span>
                  </li>
                  <li style="display: flex; align-items: flex-start; margin-bottom: 0.75rem;">
                    <div style="color: #3b82f6; margin-right: 0.5rem;">●</div>
                    <span>Expansion to corporate legal services</span>
                  </li>
                  <li style="display: flex; align-items: flex-start;">
                    <div style="color: #3b82f6; margin-right: 0.5rem;">●</div>
                    <span>Positioning for potential acquisition by tech or legal giant</span>
                  </li>
                </ul>
              </div>
              
              <div style="background-color: #ecfdf5; padding: 1rem; border-radius: 0.5rem; text-align: center;">
                <div style="font-weight: 600; margin-bottom: 0.5rem;">Impact Goal</div>
                <p>Democratize access to legal services for millions of Latin Americans</p>
              </div>
            </div>
          </div>
        </div>
      `,
      background: { color: "#ffffff" }
    },

    // Slide 11: Team
    {
      id: "slide-11",
      content: `
        <div>
          <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">OUR TEAM</h2>
          
          <div style="margin-bottom: 1.5rem;">
            <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Founders with Complementary Experience</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
              <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem; text-align: center;">
                <div style="width: 4rem; height: 4rem; background-color: #e2e8f0; border-radius: 9999px; margin: 0 auto 0.75rem;"></div>
                <h4 style="font-weight: 600;">[Partner 1]</h4>
                <p style="font-size: 0.875rem; font-weight: 500;">CEO</p>
                <p style="font-size: 0.75rem;">10+ years in digital product development</p>
                <p style="font-size: 0.75rem; font-style: italic;">Ex-[Relevant Company]</p>
              </div>
              
              <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem; text-align: center;">
                <div style="width: 4rem; height: 4rem; background-color: #e2e8f0; border-radius: 9999px; margin: 0 auto 0.75rem;"></div>
                <h4 style="font-weight: 600;">[Partner 2]</h4>
                <p style="font-size: 0.875rem; font-weight: 500;">COO</p>
                <p style="font-size: 0.75rem;">8+ years in growth strategy and operations</p>
                <p style="font-size: 0.75rem; font-style: italic;">Ex-[Relevant Company]</p>
              </div>
              
              <div style="background-color: #f8f9fa; padding: 1rem; border-radius: 0.5rem; text-align: center;">
                <div style="width: 4rem; height: 4rem; background-color: #e2e8f0; border-radius: 9999px; margin: 0 auto 0.75rem;"></div>
                <h4 style="font-weight: 600;">[Partner 3]</h4>
                <p style="font-size: 0.875rem; font-weight: 500;">CTO</p>
                <p style="font-size: 0.75rem;">12+ years in tech development and AI</p>
                <p style="font-size: 0.75rem; font-style: italic;">Ex-[Relevant Company]</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Key Advisors</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div style="background-color: #edf5ff; padding: 1rem; border-radius: 0.5rem;">
                <h4 style="font-weight: 600;">[Legal Advisor]</h4>
                <p style="font-size: 0.875rem;">Partner at [Major Firm]</p>
                <p style="font-size: 0.75rem;">Specialist in legaltech</p>
              </div>
              
              <div style="background-color: #edf5ff; padding: 1rem; border-radius: 0.5rem;">
                <h4 style="font-weight: 600;">[Tech Advisor]</h4>
                <p style="font-size: 0.875rem;">Former CTO of [Successful Startup]</p>
              </div>
            </div>
          </div>
        </div>
      `,
      background: { color: "#ffffff" }
    },

    // Slide 12: Contact
    {
      id: "slide-12",
      content: `
        <div>
          <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 1.5rem;">CONTACT US</h2>
          
          <div style="text-align: center; margin-bottom: 2rem;">
            <div style="width: 6rem; height: 6rem; background-color: #eee; border-radius: 50%; margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 1.5rem; font-weight: bold;">LOGO</span>
            </div>
            <h1 style="font-size: 1.875rem; font-weight: bold; margin-bottom: 0.5rem;">PLEAD</h1>
            <p style="font-size: 1.25rem; font-style: italic;">Democratizing Access to Legal Services with AI</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 1.5rem; border-radius: 0.5rem; max-width: 32rem; margin: 0 auto;">
            <p style="margin-bottom: 1rem;"><strong>[CEO Name]</strong></p>
            <p style="margin-bottom: 1rem;">CEO & Co-founder</p>
            <p style="margin-bottom: 1rem;">
              <a href="mailto:email@plead.ai" style="color: #3b82f6;">email@plead.ai</a>
            </p>
            <p style="margin-bottom: 1rem;">+[phone number]</p>
            <p style="margin-bottom: 1rem;">Offices: [Address] [City, Country]</p>
            <p style="text-align: center; margin-top: 1.5rem;">
              <a href="https://www.plead.ai" style="color: #3b82f6; font-weight: 600; font-size: 1.125rem;">www.plead.ai</a>
            </p>
          </div>
        </div>
      `,
      background: { color: "#ffffff" }
    }
  ] as Slide[]
};

// Puedes tener múltiples presentaciones predefinidas
export const presentations = {
  default: defaultPresentation,
  // otras presentaciones...
}; 